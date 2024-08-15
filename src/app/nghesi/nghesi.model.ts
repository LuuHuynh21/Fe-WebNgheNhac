import { BaiHat } from "../baihat/baihat.model";

export interface NgheSi{
    id: number;
    ma: string;
    ten: string;
    trangThai: boolean;
    moTa: string;
    hinhAnh: string;
    ngayTao?: Date;
    ngaySua?: Date;
    baiHats?: BaiHat[];
}