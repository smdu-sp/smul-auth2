import { ApiProperty } from '@nestjs/swagger';

export class Servidor {
  @ApiProperty({ example: 'c74a2d66-2a1d-4b3a-b6e6-6f3e1b8e1f61' })
  id: string;

  @ApiProperty({ example: '10.10.65.242' })
  ip: string;

  @ApiProperty({ required: false, example: 'LDAP Principal' })
  nome?: string;

  @ApiProperty({ type: String, format: 'date-time' })
  criadoEm: Date;

  @ApiProperty({ type: String, format: 'date-time' })
  atualizadoEm: Date;
}
