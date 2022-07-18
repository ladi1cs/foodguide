import Papa from 'papaparse';

const parseCsv = (str: string) => {
    const rawData: any[] = Papa.parse(str).data;
    const rows: any[] = rawData.slice(0, rawData.length-1);
    const headers: string[] = rows[0].filter((h: string) => !!h);
    rows.shift();

    const list:any[] = rows.map( row => {
        const values: string[] = row;
        const data: any = headers.reduce((obj: any, header: string, i: number) => {
            obj[header.trim()] = values[i].trim();
            return obj;
        }, {})
        return data;
    })
   
    return list;
}

export const getData = async (fileName: string) => {
    const path: string = `../../data/${fileName}.csv`;
    return fetch(path)
    .then((res) => {
        return res.text();
    }).then((data) => {
        const list = parseCsv(data);
        return list;
    });
}
