import React from 'react';
import './style.css';
import PageTitle from '@Components/PageTitle/page_title';

function HeaderRow(props) {
	const { headerKeys } = props;

	const headerContent = headerKeys.map((key, index) =>
		<th key={`head-${index}`}>{key.toUpperCase()}</th>
	);

	return (
		<thead>
			<tr>{headerContent}</tr>
		</thead>
	);
}

function RenderCell(props) {
	const { cellData } = props;
	return (
		<td>{cellData}</td>
	);
}

function CellContent(props) {
	const { rowData, headerKeys } = props;
	return (
		headerKeys.map((key, index) =>
			<RenderCell key={`cell-${rowData.id.toString()}-${index.toString()}`} cellData={rowData[key]} />
		)
	)
}

function RowContent(props) {
	const { rowData, headerKeys } = props;
	return (
		<tr>
			<CellContent rowData={rowData} headerKeys={headerKeys} />
		</tr>
	);
}

function DataContent(props) {
	const { dataArray, headerKeys } = props;
	return (
		dataArray.map((rowData, index) =>
			<RowContent key={`row-${index.toString()}`} rowData={rowData} headerKeys={headerKeys} />
		)
	);
}

function BodyContent(props) {
	const { dataArray, headerKeys } = props;
	return (
		<tbody>
			<DataContent dataArray={dataArray} headerKeys={headerKeys} />
		</tbody>
	);
}

export default function TableFrame(props) {
	const { data } = props;
	const headerKeys = Object.keys(data[0]);
	return (
		<div className="content-wrapper">
			<PageTitle />
			<div className="table-outer">
				<table className="table-frame">
					<HeaderRow headerKeys={headerKeys} />
					<BodyContent dataArray={data} headerKeys={headerKeys} />
				</table>
			</div>
		</div>
	);
}