import { NextRequest, NextResponse } from 'next/server';
import { getSolarData } from '../../../lib/apiClient';

export async function POST(request: NextRequest) {
  try {
    const { zip } = await request.json();
    
    if (!zip) {
      return NextResponse.json({ error: 'ZIP code is required' }, { status: 400 });
    }

    const solarData = await getSolarData(zip);
    
    return NextResponse.json(solarData);
  } catch (error) {
    console.error('Error fetching solar data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch solar data' }, 
      { status: 500 }
    );
  }
}
