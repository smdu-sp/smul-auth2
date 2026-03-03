import { ApiProperty } from '@nestjs/swagger';

export class CreateServidorDto {
  @ApiProperty({ description: 'IP único do servidor', example: '10.10.65.242' })
  ip: string;
  @ApiProperty({
    description: 'Nome amigável do servidor',
    required: false,
    example: 'LDAP Principal',
  })
  nome?: string;
}
