import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

export const SortSelector = () => {
	const sortOrders = [
		{ value: '', label: 'Relevance' },
		{ value: '-added', label: 'Date added' },
		{ value: 'name', label: 'Name' },
		{ value: '-released', label: 'Release date' },
		{ value: '-metacritic', label: 'Popularity' },
		{ value: '-rating', label: 'Average rating' },
	];
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{/* {selectedPlatform ? selectedPlatform.name : 'Select a Platform'} */}
				Order by: Relevance
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						onClick={() => console.log(order.label)}
						key={order.value}
						value={order.value}
					>
						{order.label}
					</MenuItem>
				))}
				{/* <MenuItem>Relevance</MenuItem>
				<MenuItem>Date added</MenuItem>
				<MenuItem>Name</MenuItem>
				<MenuItem>Release date</MenuItem>
				<MenuItem>popularity</MenuItem>
				<MenuItem>Average rating</MenuItem> */}
				{/* {data.map((platform) => (
					<MenuItem
						onClick={() => onSelectPlatform(platform)}
						key={platform.id}
					>
						{platform.name}
					</MenuItem>
				))} */}
			</MenuList>
		</Menu>
	);
};
