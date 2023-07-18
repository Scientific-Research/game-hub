import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

export const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (error) return <p>ERROR! try it again later.</p>;
	if (isLoading) return <Spinner />;

	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							objectFit="cover"
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Button
							whiteSpace="normal"
							textAlign="left"
							fontSize="lg"
							variant="link"
							fontWeight={
								genre.id === selectedGenre?.id
									? 'bold'
									: 'normal'
							}
							onClick={() =>
								// console.log(`You clicked ${genre.name}`)
								onSelectGenre(genre)
							}
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};
