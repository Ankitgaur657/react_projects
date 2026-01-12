import { ApiResponse } from '../types';

export const fetchArtworks = async (page: number): Promise<ApiResponse> => {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};