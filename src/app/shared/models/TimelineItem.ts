export interface ITimelineItem {
    ID: number;
    text: string;
    creation_date: Date;
    shared: boolean;
    uuid: string;
    parent_ID: number;
    exp_count: number;
    type_ID: number;
    likes: {
       username: string;
       ID: number; 
    }[];
    user: {
        username: string;
        tag: string;
        ID: number;
    };
    comments?: ITimelineItem[];
    attachments?: string[];
}