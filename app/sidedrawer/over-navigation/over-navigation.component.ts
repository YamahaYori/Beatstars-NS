import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-telerik-ui-pro/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: "tk-sidedrawer-over-navigation",
    templateUrl: 'over-navigation.component.html',
    styleUrls: ['over-navigation.component.css']
})
export class SideDrawerOverNavigationComponent implements AfterViewInit, OnInit {
    private _mainContentText: string;

    constructor(private _router: Router, private _changeDetectionRef: ChangeDetectorRef) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    }

    get mainContentText() {
        return this._mainContentText;
    }

    set mainContentText(value: string) {
        this._mainContentText = value;
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
       this.drawer.closeDrawer();
    }

    public goToSecondPage() {
        this._router.navigateByUrl("SecondSideDrawerOverNavigationComponent");
    }
}
