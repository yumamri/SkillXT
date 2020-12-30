import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SkillsService} from "../api/services/skills.service";
import {Observable} from "rxjs";
import {SkillDto} from "../api/models/skill-dto";

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(
      private readonly _http: HttpClient,
      private skillService: SkillsService) {

  }
  public getSkills(): Array<SkillDto> {
    return this.skillService.getSkills();
  }
}
