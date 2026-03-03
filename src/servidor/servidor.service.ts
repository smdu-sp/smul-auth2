import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ServidorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createServidorDto: CreateServidorDto) {
    const { ip, nome } = createServidorDto;
    return await this.prisma.servidor.create({
      data: { ip, nome },
    });
  }

  async findAll() {
    return await this.prisma.servidor.findMany();
  }

  async findOne(id: string) {
    const servidor = await this.prisma.servidor.findUnique({
      where: { id },
    });
    if (!servidor) throw new NotFoundException('Servidor não encontrado');
    return servidor;
  }

  async update(id: string, updateServidorDto: UpdateServidorDto) {
    try {
      return await this.prisma.servidor.update({
        where: { id },
        data: updateServidorDto,
      });
    } catch {
      throw new NotFoundException('Servidor não encontrado');
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.servidor.delete({
        where: { id },
      });
    } catch {
      throw new NotFoundException('Servidor não encontrado');
    }
  }
}
