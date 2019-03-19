// this file contains the data we need for the gallery
// The main object, "gallery" contains an array of album
// each album contains an array of photos
// (plus a name and a thumbnail image)
// The photos contain an image src and some metadata

var gallery = {
	albums : [
		{
			name : "Travels",
			thumbnail : "public/images/img_1.jpg",
			photos : [
				{
					src : "public/images/img_1.jpg",
					title : "grafitti",
					description : "some derelict appartments with grafitti"
				},
				{
					src : "public/images/img_6.jpg",
					title : "fountain",
					description : "a huge dragon fountain"
				},
				{
					src : "public/images/img_7.jpg",
					title : "tower",
					description : "a colourful tower block"
				},
				{
					src : "public/images/img_8.jpg",
					title : "walkways",
					description : "an interesting interior"
				}
			]
		},
		{
			name : "Equipment",
			thumbnail : "public/images/img_4.jpg",
			photos : [
				{
					src : "public/images/img_4.jpg",
					title : "syths",
					description : "all workshops should aspire to being this tidy"
				},
				{
					src : "public/images/img_9.jpg",
					title : "helmet",
					description : "a sci-fi helmet"
				},
				{
					src : "public/images/img_12.jpg",
					title : "drums",
					description : "a rather nice drum kit"
				}
			]
		},
		{
			name : "English Winter",
			thumbnail : "public/images/img_17.jpg",
			photos : [
				{
					src : "public/images/img_16.jpg",
					title : "dog in the snow",
					description : "looks like he needs that jacket"
				},
				{
					src : "public/images/img_17.jpg",
					title : "winter",
					description : "a snowy scene in a park"
				},
				{
					src : "public/images/img_18.jpg",
					title : "frosty pond",
					description : "some ducks feeling cold"
				}
			]
		}

	]
};
