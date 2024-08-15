
import { BaiHat } from "../baihat/baihat.model";
import { NgheSi } from "../nghesi/nghesi.model";

export interface Album{
  id: number;
  ma: string;
  ten: string;
  trangThai: boolean;
  ngheSi: NgheSi;
  hinhAnh: string;
  ngayTao?: Date;
  ngaySua?: Date;
  baiHats?: BaiHat[];
}