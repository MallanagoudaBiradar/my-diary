import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AddPageService } from '../add-page.service';
import { addPage } from './addPageModel';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  addPageForm!: FormGroup;
  addPageModelObj: addPage = new addPage();
  addPageData!: addPage[];
  showAdd!: boolean;
  showUpdate!: boolean;

  submitted = false;

  constructor(private formbuilder: FormBuilder, private addPageservice:AddPageService ) { }

  ngOnInit(): void {
    this.addPageForm = this.formbuilder.group({
      title:['',Validators.required],
      date:['',Validators.required],
      page: ['', Validators.required],
    })
    this.getPage();
  }

  onclickAdd() {
    this.showAdd = true;
    this.showUpdate = false;
  }
  addPage() {
    this.addPageModelObj.title = this.addPageForm.value.title;
    this.addPageModelObj.date = this.addPageForm.value.date;
    this.addPageModelObj.page = this.addPageForm.value.page;

    this.addPageservice.postPage(this.addPageModelObj)
      .subscribe(res => {
        console.log(res);
        alert("Page Added Successfully");
        this.addPageForm.reset();
        this.getPage();
        let ref = document.getElementById('cancel')
        ref?.click();
      });
  }

  deletePage(row: any) {
    this.addPageservice.deletePage(row.id).subscribe(res => {
      alert("Page Deleted");
      this.getPage();
    })
  }

  getPage() {
    this.addPageservice.getPage().subscribe(res => {
      this.addPageData = res;
    })
  }

  onEditPage(row: any) {
    this.addPageModelObj.id = row.id;
    this.addPageForm.controls['title'].setValue(row.title);
    this.addPageForm.controls['date'].setValue(row.date);
    this.addPageForm.controls['page'].setValue(row.page);

    this.showAdd = false;
    this.showUpdate = true;
  }

  updatePage() {
    this.addPageModelObj.title = this.addPageForm.value.title;
    this.addPageModelObj.date = this.addPageForm.value.date;
    this.addPageModelObj.page = this.addPageForm.value.page;

    this.addPageservice.updatePage(this.addPageModelObj, this.addPageModelObj.id).subscribe(res => {
      alert(" Page Updated successfully");
      this.addPageForm.reset();
      this.getPage();
    })

  }

}







