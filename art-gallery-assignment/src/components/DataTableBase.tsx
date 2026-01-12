import { useState, useEffect, useRef } from 'react';
import { DataTable, DataTablePageEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { Artwork } from '../types';
import { fetchArtworks } from '../api/artworkService';

const DataTableBase = () => {
    // UI & Data State
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [totalRecords, setTotalRecords] = useState(0);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [isWelcomeActive, setIsWelcomeActive] = useState(true);

    // Selection State
    const [selectedRows, setSelectedRows] = useState<Artwork[]>([]);
    const [targetSelectionCount, setTargetSelectionCount] = useState<number>(0);
    const [customCount, setCustomCount] = useState<number | null>(null);
    
    const op = useRef<OverlayPanel>(null);
    const rowsPerPage = 12;

    //  Welcome Splash Screen (Initial load only)
    useEffect(() => {
        const timer = setTimeout(() => setIsWelcomeActive(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    //  Data Fetching & Intent-Based Auto-Selection
    useEffect(() => {
        const load = async () => {
            setLoading(true);
            try {
                // Fetch only current page - no pre-fetching
                const result = await fetchArtworks(page); 
                setArtworks(result.data);
                setTotalRecords(result.pagination.total);

               
                if (targetSelectionCount > 0) {
                    const currentlySelectedIds = new Set(selectedRows.map(i => i.id));
                    const remainingToSelect = targetSelectionCount - selectedRows.length;

                    if (remainingToSelect > 0) {
                        const newPageSelections = result.data
                            .slice(0, remainingToSelect)
                            .filter(item => !currentlySelectedIds.has(item.id));

                        if (newPageSelections.length > 0) {
                            setSelectedRows(prev => [...prev, ...newPageSelections]);
                        }
                    }
                }
            } catch (e) {
                console.error("Fetch error:", e);
            }
            setLoading(false);
        };

        if (!isWelcomeActive) load();
    }, [page, isWelcomeActive, targetSelectionCount]);

    const onPage = (event: DataTablePageEvent) => {
        setPage((event.page ?? 0) + 1);
    };

    // for bulk and custom selection
    const handleBulkSelect = () => {
        if (customCount === null || customCount <= 0) return;

        setTargetSelectionCount(customCount);

        
        const currentBatch = artworks.slice(0, customCount);
        setSelectedRows(prev => {
            const existingIds = new Set(prev.map(i => i.id));
            const freshSelection = currentBatch.filter(i => !existingIds.has(i.id));
            return [...prev, ...freshSelection];
        });

        op.current?.hide();
        setCustomCount(null);
    };

   
    const inscriptionTemplate = (rowData: Artwork) => {
        return rowData.inscriptions ? rowData.inscriptions : <span className="text-na">N/A</span>;
    };

    if (isWelcomeActive) {
        return (
            <div className="welcome-screen">
                <h1 className="welcome-text">Welcome to Art Gallery</h1>
            </div>
        );
    }

    
    const displayCount = Math.max(selectedRows.length, targetSelectionCount);

    return (
        <div className="main-layout flex flex-column align-items-center justify-content-center">
            <h1 className="main-title text-6xl font-bold my-6">Art Institute Gallery</h1>
            
            <div className="table-wrapper shadow-8">
               
                <div className="aggregate-header p-3 border-bottom-1 surface-border">
                    <span className="text-xl">
                        Selected: <span className="font-bold text-indigo-600">
                            {displayCount} rows
                        </span>
                    </span>
                </div>

                <DataTable 
                    value={artworks} 
                    lazy 
                    paginator 
                    first={(page - 1) * rowsPerPage} 
                    rows={rowsPerPage} 
                    totalRecords={totalRecords} 
                    onPage={onPage} 
                    loading={loading}
                    selection={selectedRows} 
                    onSelectionChange={(e) => {
                        const newSelection = e.value as Artwork[];
                        
                       
                        if (targetSelectionCount > 0) {
                            const diff = newSelection.length - selectedRows.length;
                            setTargetSelectionCount(prev => Math.max(0, prev + diff));
                        }
                        
                        setSelectedRows(newSelection);
                    }}
                    dataKey="id" 
                    selectionMode="multiple"
                    scrollable 
                    scrollHeight="500px" 
                    className="custom-table"
                    tableStyle={{ minWidth: '100%' }}
                >
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} frozen alignFrozen="left"></Column>
                    <Column 
                        header={<i className="pi pi-chevron-down cursor-pointer text-indigo-500 p-2" onClick={(e) => op.current?.toggle(e)}></i>} 
                        headerStyle={{ width: '3rem' }}
                        frozen alignFrozen="left"
                    />
                    <Column field="title" header="TITLE" />
                    <Column field="place_of_origin" header="PLACE OF ORIGIN" />
                    <Column field="artist_display" header="ARTIST" />
                    <Column field="inscriptions" header="INSCRIPTIONS" body={inscriptionTemplate} />
                    <Column field="date_start" header="START" />
                    <Column field="date_end" header="END" />
                </DataTable>
            </div>

            <OverlayPanel ref={op} showCloseIcon>
                <div className="flex flex-column gap-3 p-2 w-15rem">
                    <span className="font-bold text-lg text-900">Select Multiple Rows</span>
                    <InputNumber 
                        value={customCount} 
                        onValueChange={(e: InputNumberValueChangeEvent) => setCustomCount(e.value ?? null)} 
                        placeholder="e.g., 5" 
                        min={1}
                        className="w-full"
                    />
                    <Button label="Submit" onClick={handleBulkSelect} className="p-button-indigo w-full" />
                </div>
            </OverlayPanel>
        </div>
    );
};

export default DataTableBase;