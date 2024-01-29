import { Injectable } from '@nestjs/common';
import { HistoryRegistryDto } from './dto/history-registry.dto';

@Injectable()
export class HistoryService {
  async create(newRegistryReq: HistoryRegistryDto) {
    console.log(newRegistryReq);
  }
}
