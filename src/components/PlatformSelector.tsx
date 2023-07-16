import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

export const PlatformSelector = ({
	onSelectPlatform,
	selectedPlatform,
}: Props) => {
	const { data, error } = usePlatforms();
	if (error) return <p>ERROR! try it again later.</p>;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform ? selectedPlatform.name : 'Select a Platform'}
			</MenuButton>
			<MenuList>
				{data.map((platform) => (
					<MenuItem
						onClick={() => onSelectPlatform(platform)}
						key={platform.id}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};
