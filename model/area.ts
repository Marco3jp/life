export interface Area {
    x: number
    y: number
    z?: number | locationHeight
}

interface locationHeight {
    positive: number,
    negative?: number
}
