import { Badge } from '@chakra-ui/react';

interface Props {
	score: number;
}
export const CriticScore = ({ score }: Props) => {
	return (
		<Badge fontSize="14px" paddingX={2}>
			{score}
		</Badge>
	);
};
