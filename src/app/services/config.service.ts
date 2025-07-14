import {inject, Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {ICON_PARTLY_CLOUDY_DAY} from "../consts/icons";
import {Icon} from "../models/icon.model";

@Injectable({
  providedIn: 'root'
})
export class MatIconsConfigService {
  private matIconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);
  private icons: Icon[] = [
    {name: ICON_PARTLY_CLOUDY_DAY, path: 'assets/icons/partly_cloudy_day.svg'},
  ];

  public config(): void {
    this.configIcons();
  }

  private configIcons(): void {
    this.icons.forEach(icon =>
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(icon.path)
      )
    );
  }
}
