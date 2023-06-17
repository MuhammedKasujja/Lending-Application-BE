import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private clientRepo: Repository<Client>,
  ) {}

  create(createClientDto: CreateClientDto) {
    const newClient = new Client();
    newClient.firstName = createClientDto.firstName;
    newClient.lastName = createClientDto.lastName;
    newClient.address = createClientDto.address;
    newClient.gender = createClientDto.gender;
    newClient.email = createClientDto.email;
    newClient.nationalId = createClientDto.nationalId;

    return this.clientRepo.save(newClient);
  }

  findAll() {
    return this.clientRepo.find();
  }

  findOne(id: number) {
    return this.getClientById(id);
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const client = await this.getClientById(id);
    client.firstName = updateClientDto.firstName!;
    client.lastName = updateClientDto.lastName!;
    client.address = updateClientDto.address;
    client.gender = updateClientDto.gender!;
    return this.clientRepo.save(client);
  }

  async remove(id: number) {
    const client = await this.getClientById(id);
    return this.clientRepo.remove(client);
  }

  private async getClientById(id: number) {
    const client = await this.clientRepo.findOneBy({ id });
    if (!client) {
      throw new HttpException(
        `Client with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return client;
  }
}
