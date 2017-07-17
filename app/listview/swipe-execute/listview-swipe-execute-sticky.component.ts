// >> angular-listview-swipe-execute-sticky-component
import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { EventData } from "tns-core-modules/data/observable";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { ListViewEventData, RadListView, SwipeActionsEventData } from "nativescript-telerik-ui-pro/listview";
import * as frameModule from "tns-core-modules/ui/frame";
import * as utilsModule from "tns-core-modules/utils/utils";

@Component({
    moduleId: module.id,
    selector: "tk-listview-swipe-execute-sticky",
    providers: [DataItemService],
    templateUrl: "listview-swipe-execute-sticky.component.html",
    styleUrls: ["listview-swipe-execute-sticky.component.css"]
})
export class ListviewSwipeExecuteStickyComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _selectedItems: string;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getPostDataItems());
    }

    public onSwipeCellStarted(args: SwipeActionsEventData) {
        var swipeLimits = args.data.swipeLimits;

        swipeLimits.threshold = 60 * utilsModule.layout.getDisplayDensity();
        swipeLimits.left = 80 * utilsModule.layout.getDisplayDensity();
        swipeLimits.right = 80 * utilsModule.layout.getDisplayDensity();
    }

    public onItemClick(args: ListViewEventData) {
        var listView = <RadListView>frameModule.topmost().currentPage.getViewById("listView");
        listView.notifySwipeToExecuteFinished();
        console.log("Item click: " + args.index);
    }

    public onLeftSwipeClick(args: EventData) {
        var listView = <RadListView>frameModule.topmost().currentPage.getViewById("listView");
        listView.notifySwipeToExecuteFinished();
    }

    public onRightSwipeClick(args: EventData) {
        var listView = <RadListView>frameModule.topmost().currentPage.getViewById("listView");
        listView.notifySwipeToExecuteFinished();
    }
}
// << angular-listview-swipe-execute-sticky-component