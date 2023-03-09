import React from 'react';
import Content from '../components/Content';
import Card from '../components/UI/Card';
import tangerines from '../assets/tangerines.jpg';
import blueberries from '../assets/blueberries-sm.jpg';
import avocado from '../assets/avocado.jpg';
import Header from '../components/Header';

function HomePage() {
	return (
		<>
		<Header title='FromTheNature...' description='Your source of health'/>

		<Card>
			<Content
				title={'The best fruits and veggies for your bliss!'}
				img={tangerines}
				alt='Tangerines'>
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
				title='A healthy addiction!'
				img={blueberries}
				alt='Blueberries'>
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
					rem. Similique accusamus aperiam odit quidem.
				</p>
			</Content>
			<Content
				title='Improve your diet with us...'
				img={avocado}
				alt='Avocado'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem vero
					rem. Similique accusamus aperiam odit quidem, delectus vitae quam beatae! Est numquam recusandae ea voluptate
					enim, voluptates laborum omnis consectetur excepturi minima, laboriosam ad alias!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem vero
					rem. Similique accusamus aperiam odit quidem.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem vero
					rem. Similique accusamus aperiam odit quidem.
				</p>
			</Content>
		</Card>
		</>
	);
}

export default HomePage;
