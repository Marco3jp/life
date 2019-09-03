export interface Area {
    x: number
    y: number
    z?: number | LocationHeight
}

export interface LocationHeight {
    positive: number,
    negative?: number
}
