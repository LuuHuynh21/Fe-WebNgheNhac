import { Album } from "../album/album.model";
import { NgheSi } from "../nghesi/nghesi.model";
import { TheLoai } from "../theloai/theloai.model";

export interface BaiHat{
    id: number;
    ma: string;
    ten: string;
    trangThai: boolean;
    thoiLuong: string;
    url: string;
    album: Album;
    theLoai: TheLoai;
    ngheSi: NgheSi;
    luotNghe: number;
    ngayTao?: Date;
    ngaySua?: Date;
}