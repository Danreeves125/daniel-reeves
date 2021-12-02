import * as React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql} from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper';
import testimonialBg from './testimonials-bg.jpg';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const TestimonialWrapper = styled.section `
	width: 100%;
	background: linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)), url('${testimonialBg}') 50% 50% / cover;
	display: flex;
	flex-direction: column;
	padding: 6rem 0;

    @media(max-width: 1024px) {
        padding: 4rem 0;
    }

    @media(max-width: 640px) {
        padding: 3rem 0;
    }
	
	svg {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 7rem;
		
		@media(max-width: 1024px) {
            margin-bottom: 4rem;
		}

        @media(max-width: 640px) {
            margin-bottom: 3rem;
        }
	}
	
	.slider {
		width: 100%;
		max-width: 83rem;
		margin: 0 auto 6.8rem auto;
		overflow: hidden;
		padding: 0;
		
		@media(max-width: 1024px) {
			margin-bottom: 4rem;
		}
		
		@media(max-width: 640px) {
			margin-bottom: 3rem;
		}
		
		.slide {
			text-align: center;
			padding: 0 1.5rem;
		}
		
		.swiper-pagination {
			position: relative;
			display: flex;
			justify-content: center;
			bottom: 0;
		}
	}
	
	.bullets {
		display: flex;
		align-items: center;
		justify-content: center;
		
		.bullet {
			width: 0.8rem;
			height: 0.8rem;
			background-color: #fff;
			transition: ease 0.5s;
			border-radius: 0.6rem;
			cursor: pointer;
			
			&:not(:last-of-type) {
				margin-right: 1rem;
			}
			
			&--active {
				width: 3rem;
				background-color: var(--blue);
				border-radius: 0.6rem;
			}
		}
	}
`;

const Text = styled.div `
	margin-bottom: 2.2rem;
	
	p {
		font-size: 1.8rem;
		line-height: 2.3rem;
		color: #fff;
		margin: 0;
	}
`

const Name = styled.div `
	text-transform: uppercase;
	color: #fff;
	font-weight: bold;
	font-family: var(--primary-font);
	font-size: 3rem;
	line-height: 3.5rem;
`

const TestimonialsBlock = () => {
	
	const getTestimonials = useStaticQuery(graphql `
        query LatestTestimonials {
            allWpTestimonial(limit: 5) {
                edges {
                    node {
                        id
                        content
                        title
                        testimonial {
                            name
                            companyLogo {
                                id
                            }
                        }
                    }
                }
            }
        }
    `);
	
	const getAllTestimonials = getTestimonials.allWpTestimonial.edges;
	
	return (
		<TestimonialWrapper>
			<svg xmlns="http://www.w3.org/2000/svg" width="86.469" height="69.499"><path fill="none" d="M0 0h86.469v69.499H0z" data-name="Group 16"/><path d="M.865 35.928v33.017h33.9V35.928H17.813s0-16.51 16.948-16.51V2.908S.865 2.908.865 35.928Zm84.74-16.51V2.908s-33.9 0-33.9 33.02v33.017h33.9V35.928H68.657s0-16.51 16.948-16.51Z" fill="#fc4444" data-name="Group 17"/></svg>
			<Swiper
				modules={[EffectFade, Pagination]}
				className="slider"
				slidesPerView={1}
				effect="fade"
				fadeEffect={{crossFade: true}}
				pagination={{
					clickable: true,
					el: '.bullets',
					bulletClass: 'bullet',
					bulletActiveClass: 'bullet--active',
					renderBullet: (index, className) => {
						return `<span class=${className}></span>`
					},
				}}
			>
				{getAllTestimonials.map(item => (
					<SwiperSlide className="slide" key={item.node.id}>
						<Text dangerouslySetInnerHTML={{ __html: item.node.content}}></Text>
						
						{item.node.testimonial.name !== null ? <Name>{item.node.testimonial.name}</Name> : ''}
					</SwiperSlide>
				))}
			</Swiper>
			<div className="bullets"/>
		</TestimonialWrapper>
	)
}

export default TestimonialsBlock;