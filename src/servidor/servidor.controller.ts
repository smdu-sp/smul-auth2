import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServidorService } from './servidor.service.js';
import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { Servidor } from './entities/servidor.entity';

@ApiTags('Servidor')
@Controller('servidor')
export class ServidorController {
  constructor(private readonly servidorService: ServidorService) {}

  @Post()
  @ApiOperation({ summary: 'Criar servidor' })
  @ApiBody({ type: CreateServidorDto })
  @ApiResponse({ status: 201, description: 'Servidor criado', type: Servidor })
  create(@Body() createServidorDto: CreateServidorDto) {
    return this.servidorService.create(createServidorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar servidores' })
  @ApiResponse({
    status: 200,
    description: 'Lista de servidores',
    type: [Servidor],
  })
  findAll() {
    return this.servidorService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar servidor por ID' })
  @ApiParam({ name: 'id', description: 'ID do servidor' })
  @ApiResponse({
    status: 200,
    description: 'Servidor encontrado',
    type: Servidor,
  })
  findOne(@Param('id') id: string) {
    return this.servidorService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar servidor por ID' })
  @ApiParam({ name: 'id', description: 'ID do servidor' })
  @ApiBody({ type: UpdateServidorDto })
  @ApiResponse({
    status: 200,
    description: 'Servidor atualizado',
    type: Servidor,
  })
  update(
    @Param('id') id: string,
    @Body() updateServidorDto: UpdateServidorDto,
  ) {
    return this.servidorService.update(id, updateServidorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover servidor por ID' })
  @ApiParam({ name: 'id', description: 'ID do servidor' })
  @ApiResponse({
    status: 200,
    description: 'Servidor removido',
    type: Servidor,
  })
  remove(@Param('id') id: string) {
    return this.servidorService.remove(id);
  }
}
