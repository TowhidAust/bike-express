import { Button, Card, Col, Row, Typography } from 'antd';

type ProductPropTypes = {
	productInfo: {
		image: string;
		title: string;
		price: string;
	};
	onDetailsButtonClick: () => void;
};
export default function BasicProductCard(props: ProductPropTypes) {
	const { onDetailsButtonClick, productInfo } = props;
	const { image, title, price } = productInfo;
	return (
		<Card
			// key={key}
			cover={
				<div
					style={{
						position: 'relative',
						textAlign: 'right',
						backgroundImage: `url(${image})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						height: '200px',
					}}
				>
					<Button
						style={{ position: 'absolute', bottom: 0, right: 0, borderRadius: 0 }}
						type="primary"
						onClick={onDetailsButtonClick}
					>
						DETAILS
					</Button>
				</div>
			}
		>
			<Row gutter={[8, 8]}>
				<Col xs={24} sm={24} md={24}>
					<Typography.Title
						level={5}
						style={{
							whiteSpace: 'nowrap',
							width: '90%',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
						}}
					>
						<abbr style={{ textDecoration: 'none' }} title={title}>
							{title}
						</abbr>
					</Typography.Title>
				</Col>
				<Col xs={24} sm={24} md={12}>
					<Typography.Text className="font-weight-600 primary-font-color">BDT {price}</Typography.Text>
				</Col>
			</Row>
		</Card>
	);
}