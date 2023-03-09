import React from 'react';
import Content from '../components/Content';
import Card from '../components/UI/Card';
import farm from '../assets/farm.jpg'
import plants from '../assets/plantsm.jpg'

function CompanyPage() {
	return (
		<Card>
			<h2 style={{ fontFamily: 'Shadows Into Light' }}>FromTheNature...</h2>
      <Content title={'Our Mission:'} img={farm} alt="Sunset in the countryside">
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
      <Content title={'Sustainable agriculture'} img={plants} alt="Seedlings">
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

export default CompanyPage;
