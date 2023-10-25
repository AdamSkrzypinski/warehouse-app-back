import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { CreateLocationResponse } from '../interface/location-interface';

@Injectable()
export class LocationService {
  // async create(
  //   createLocationReq: CreateLocationDto,
  // ): Promise<CreateLocationResponse> {}

  findAll() {
    return `This action returns all location`;
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
