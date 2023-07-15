import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

export const PlatformSelector = () => {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Platforms
			</MenuButton>
			<MenuList>
				<MenuItem>1</MenuItem>
				<MenuItem>2</MenuItem>
				<MenuItem>3</MenuItem>
			</MenuList>
		</Menu>
	);
};
