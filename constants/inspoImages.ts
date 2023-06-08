import { ContentData } from 'model';
import { S3_BUCKET_URL } from './works';

const images: ContentData[] = [
	{
		type: 'image',
		src: `${S3_BUCKET_URL}/inspo/josef-albers-homage-to-the-square-arctic-bloom-1965.jpg`,
		alt: 'Josef Albers\' Homage to the Square in a grey, light blue, and orange color scheme',
		width: 250,
		height: 250,
	},
	{
		type: 'image',
		src: `${S3_BUCKET_URL}/inspo/farnsworth-house.jpeg`,
		alt: 'The Farnsworth House, designed by Ludwig Mies van der Rohe',
		width: 500,
		height: 281,
	}
]

export default images;