export interface artistData{
    id: number,
    name: string,
    email: string,
    xid: string, //x.com
    pid: number, //pixiv.com
};

export interface artistDetail extends artistData{
    eventList: string[],
}

export default artistData