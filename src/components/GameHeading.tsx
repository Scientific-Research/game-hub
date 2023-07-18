import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	// Games
	// Action Games
	// Xbox Games
	// Xbox Action Games

	// const heading = `${gameQuery.platform?.name || ''} ${
	// 	gameQuery.genre?.name || ''
	// }  Games`;
	let heading = '';
	if (
		gameQuery.platform?.name !== undefined &&
		gameQuery.genre?.name === undefined
	) {
		heading = gameQuery.platform?.name + ' Game';
	} else if (
		gameQuery.platform?.name === undefined &&
		gameQuery.genre?.name !== undefined
	) {
		heading = gameQuery.genre?.name + ' Game';
	} else if (
		gameQuery.platform?.name !== undefined &&
		gameQuery.genre?.name !== undefined
	) {
		heading =
			gameQuery.genre?.name + ' ' + gameQuery.platform?.name + ' Game';
	} else {
		heading = 'Game';
	}
	return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
