import { VaiTro } from "../vaitro/vaitro.model";

export interface NguoiDung{
    id: number;
    ma: string;
    ten: string;
    email: string;
    matKhau: string;
    trangThai: boolean;
    ngaySinh: string;
    gioiTinh: string;
    ngayTao?: Date;
    ngaySua?: Date;
    vaiTro: VaiTro;
}