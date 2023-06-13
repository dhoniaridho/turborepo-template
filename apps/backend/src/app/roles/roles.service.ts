import { Injectable } from '@nestjs/common';

@Injectable()
export class RolesService {
  getRoles() {
    return ['admin', 'user'];
  }
}
