import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Setting } from './entities/setting.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SettingService {
  constructor(
    @InjectRepository(Setting) private settingsRepo: Repository<Setting>,
  ) {}
  create(createSettingDto: CreateSettingDto) {
    const setting = new Setting();
    setting.key = createSettingDto.key;
    setting.value = createSettingDto.value;
    return this.settingsRepo.save(setting);
  }

  findAll() {
    return this.settingsRepo.find();
  }

  findOne(id: number) {
    return this.getSettingById(id);
  }

  async update(id: number, updateSettingDto: UpdateSettingDto) {
    const setting = await this.getSettingById(id);
    setting.key = updateSettingDto.key ?? setting.key;
    setting.value = updateSettingDto.value ?? setting.value;
    return this.settingsRepo.save(setting);
  }

  async remove(id: number) {
    const setting = await this.getSettingById(id);
    return this.settingsRepo.remove(setting);
  }

  private async getSettingById(id: number) {
    const setting = await this.settingsRepo.findOneBy({ id });
    if (!setting) {
      throw new HttpException(
        `Setting with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return setting;
  }
}
