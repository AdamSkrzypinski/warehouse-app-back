import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateAreaDto, CreatePlaceDto } from './dto/create-location.dto';
import { UpdateAreaDto, UpdatePlaceDto } from './dto/update-location.dto';
import {
  CreateAreaResponse,
  CreatePlaceResponse,
  DeleteAreaResponse,
  DeletePlaceResponse,
  UpdateAreaResponse,
  UpdatePlaceResponse,
} from '../interface/location-interface';
import { UserObj } from 'src/decorators/user-obj.decorator';
import { User } from 'src/user/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post('/area')
  createArea(
    @Body() createAreaReq: CreateAreaDto,
  ): Promise<CreateAreaResponse> {
    return this.locationService.createArea(createAreaReq);
  }

  @Post('/place')
  createPlace(
    @Body() createPlaceReq: CreatePlaceDto,
  ): Promise<CreatePlaceResponse> {
    return this.locationService.createPlace(createPlaceReq);
  }

  @Get('/area')
  @UseGuards(AuthGuard('jwt'))
  findAllAreas(@UserObj() user: User) {
    console.log(user);
    return this.locationService.findAllAreas();
  }

  @Get('/place')
  findAllPlaces() {
    return this.locationService.findAllPlaces();
  }

  @Get('/area/:id')
  findOneArea(@Param('id') id: string) {
    return this.locationService.findOneArea(id);
  }

  @Get('/place/:id')
  findOnePlace(@Param('id') id: string) {
    return this.locationService.findOnePlace(id);
  }

  @Patch('/area/:id')
  updateArea(
    @Param('id') id: string,
    @Body() updateAreaReq: UpdateAreaDto,
  ): Promise<UpdateAreaResponse> {
    return this.locationService.updateArea(id, updateAreaReq);
  }

  @Patch('/place/:id')
  updatePlace(
    @Param('id') id: string,
    @Body() updatePlaceReq: UpdatePlaceDto,
  ): Promise<UpdatePlaceResponse> {
    return this.locationService.updatePlace(id, updatePlaceReq);
  }

  @Delete(':id')
  removeArea(@Param('id') id: string): Promise<DeleteAreaResponse> {
    return this.locationService.removeArea(id);
  }

  @Delete(':id')
  removePlace(@Param('id') id: string): Promise<DeletePlaceResponse> {
    return this.locationService.removePlace(id);
  }
}
