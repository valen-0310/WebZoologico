import { Component } from "@angular/core";
import { AnimalService } from "../../services/animal-service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-animal-component",
  imports: [CommonModule],
  templateUrl: "./animal-component.html",
  styleUrl: "./animal-component.css",
})
export class AnimalComponent {
  animalList: any = [];
  datos: any[] = [];

  constructor(private animalService: AnimalService) { }

  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data as any[];
      console.log(this.animalList)
    });
  }
  ngOnInit() {
    this.getAllAnimals();
  }
}

