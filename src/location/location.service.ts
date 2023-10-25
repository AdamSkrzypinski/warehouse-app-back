import { Injectable } from '@nestjs/common';
import { CreateAreaDto, CreatePlaceDto } from './dto/create-location.dto';
import { UpdateAreaDto, UpdatePlaceDto } from './dto/update-location.dto';
import {
  CreateAreaResponse,
  CreatePlaceResponse,
  UpdateAreaResponse,
  UpdatePlaceResponse,
} from '../interface/location-interface';
import { AreaEntity } from './entities/area.entity';
import { PlaceEntity } from './entities/place.entity';

@Injectable()
export class LocationService {
  async createArea(createAreaReq: CreateAreaDto): Promise<CreateAreaResponse> {
    if (
      !createAreaReq.name ||
      createAreaReq.name === '' ||
      typeof createAreaReq.name === 'string'
    ) {
      return { isSuccess: false };
    }

    const newArea = new AreaEntity();
    newArea.name = createAreaReq.name;
    await newArea.save();
    return {
      id: newArea.id,
      isSuccess: true,
    };
  }

  async createPlace(
    createPlaceReq: CreatePlaceDto,
  ): Promise<CreatePlaceResponse> {
    const { name, areaId } = createPlaceReq;
    if (
      !name ||
      name === '' ||
      typeof name === 'string' ||
      !areaId ||
      areaId === ''
    ) {
      return { isSuccess: false };
    }

    const newPlace = new PlaceEntity();
    newPlace.name = createPlaceReq.name;
    newPlace.placeArea = await AreaEntity.findOne({
      where: {
        id: areaId,
      },
    });
    await newPlace.save();

    await newPlace.save();
    return {
      id: newPlace.id,
      isSuccess: true,
    };
  }

  async findAllAreas() {
    return await AreaEntity.find();
  }

  async findAllPlaces() {
    return await PlaceEntity.find();
  }

  async findOneArea(id: string) {
    return await AreaEntity.findOneOrFail({
      where: { id },
    });
  }

  async findOnePlace(id: string) {
    return await PlaceEntity.findOneOrFail({
      where: { id },
    });
  }

  async updateArea(
    id: string,
    updateAreaReq: UpdateAreaDto,
  ): Promise<UpdateAreaResponse> {
    const { name } = updateAreaReq;
    const areaToUpdate = await AreaEntity.findOne({ where: { id } });
    if (!areaToUpdate || !name || name === '') {
      return { isSuccess: false };
    }
    await AreaEntity.update(
      {
        id,
      },
      {
        name,
      },
    );
    return { id, isSuccess: true };
  }

  async updatePlace(
    id: string,
    updatePlaceReq: UpdatePlaceDto,
  ): Promise<UpdatePlaceResponse> {
    const { name, areaId } = updatePlaceReq;
    const area = await AreaEntity.findOne({
      where: { id: areaId },
    });
    const placeToUpdate = await PlaceEntity.findOne({ where: { id } });
    if (!placeToUpdate || !name || name === '' || !area) {
      return { isSuccess: false };
    }
    await PlaceEntity.update(
      {
        id,
      },
      {
        name,
        placeArea: area,
      },
    );
    return { id, isSuccess: true };
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
