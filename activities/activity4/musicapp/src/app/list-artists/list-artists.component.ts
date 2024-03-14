import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';

import { Artist } from '../models/artists.model';

@Component({
	selector: 'app-list-artists',
	templateUrl: './list-artists.component.html',
	styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent implements OnInit {
	artists: Artist[] = [];
	selectedArtist: Artist | null = null;

	constructor(private route: ActivatedRoute, private service: MusicServiceService) { }

	ngOnInit() {
		console.log("Getting data ....");
		this.service.getArtists((artists: Artist[]) => {
			this.artists = artists;
			console.log('this.artists', this.artists);
		});
	}

	public onSelectArtist(artist: Artist) {
		this.selectedArtist = artist;
	}
}
