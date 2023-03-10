import React from 'react';
import Card from '../components/UI/Card';
import Content from '../components/Layout/Content';
import carrots from '../assets/carrots.jpg';
import farmers from '../assets/farmerssm.jpg';
import veggies from '../assets/woman-with-veggies.jpg';

function ProductsPage() {
	return (
		<Card>
			<Content
				title={'Organically grown'}
				img={carrots}
				alt='Carrots'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem vero
					rem. Similique accusamus aperiam odit quidem, delectus vitae quam beatae! Est numquam recusandae ea voluptate
					enim, voluptates laborum omnis consectetur excepturi minima, laboriosam ad alias!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem vero
					rem. Similique accusamus aperiam odit quidem, delectus vitae quam beatae! Est numquam recusandae ea voluptate
					enim, voluptates laborum omnis consectetur excepturi minima, laboriosam ad alias!
				</p>
			</Content>

			<Content
				title={'Locally harvested'}
				img={farmers}
				alt='Farmers harvest vegetables'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem vero
					rem. Similique accusamus aperiam odit quidem, delectus vitae quam beatae! Est numquam recusandae ea voluptate
					enim, voluptates laborum omnis consectetur excepturi minima, laboriosam ad alias!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem vero
					rem. Similique accusamus aperiam odit quidem, delectus vitae quam beatae! Est numquam recusandae ea voluptate
					enim, voluptates laborum omnis consectetur excepturi minima, laboriosam ad alias!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem vero
					rem. Similique accusamus aperiam odit quidem, delectus vitae quam beatae! Est numquam recusandae ea voluptate
					enim, voluptates laborum omnis consectetur excepturi minima, laboriosam ad alias!
				</p>
			</Content>

			<Content
				title={'Fresh fruit and vegetables straight to your home!'}
				img={veggies}
				alt='A woman with veggies'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem vero
					rem. Similique accusamus aperiam odit quidem, delectus vitae quam beatae! Est numquam recusandae ea voluptate
					enim, voluptates laborum omnis consectetur excepturi minima, laboriosam ad alias!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem vero
					rem. Similique accusamus aperiam odit quidem, delectus vitae quam beatae! Est numquam recusandae ea voluptate
					enim, voluptates laborum omnis consectetur excepturi minima, laboriosam ad alias!
				</p>
			</Content>
		</Card>
	);
}

export default ProductsPage;
