import Table from './Table.svelte';
import Thead from './Thead.svelte';
import Tbody from './Tbody.svelte';
import Tr from './Tr.svelte';
import Th from './Th.svelte';
import Td from './Td.svelte';

const TableComponent = Object.assign(Table, {
	Thead: Thead,
	Tbody: Tbody,
	Tr: Tr,
	Th: Th,
	Td: Td
});

export default TableComponent;
