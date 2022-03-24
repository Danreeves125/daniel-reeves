import * as React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql} from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Navigation} from 'swiper';
import TestimonialBlock from "./testimonialBlock";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TestimonialWrapper = styled.section `
	width: 100%;
	position: relative;
	padding: 7vw 0;
	
	&:after {
		content: '';
		width: 100%;
		height: 20rem;
		background: linear-gradient(0deg, rgba(237,237,237,1) 0%, rgba(237,237,237,0) 100%);
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 1;
	}
	
	.slider {
		width: calc(100% - 10rem);
		overflow: hidden;
		padding: 1.1rem 0;
		margin: 0 auto 3vw auto;
		z-index: 3;

		@media(max-width: 395px) {
			width: 100%;
			margin-bottom: 3rem;
		}
		
		.slide {
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
		position: relative;
		z-index: 2;
		
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

const TestimonialInner = styled.div `
	width: 100%;
	max-width: 131rem;
	margin: 0 auto;
	padding: 0 1.5rem;
	display: flex;
	align-items: center;
	position: relative;
	z-index: 2;
	
	.arrow {
		width: 4.5rem;
		height: 4.5rem;
		border: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background-color: var(--purple);
		
		&.swiper-button-disabled {
			opacity: 0.4;
		}

		@media(max-width: 395px) {
			display: none;
		}

		svg {
			width: auto;
			height: 2.8rem;

			path {
				fill: #fff;
			}
		}
		
		&--prev {
			svg {
				transform: scaleX(-1);
			}
		}
		&--next {
			
		}
	}
`;

const TextTop = styled.div `
	max-width: 85rem;
	width: 100%;
	text-align: center;
	margin: 0 auto 3rem auto;
	padding: 0 1.5rem;
	
	p, ul {
		&:last-child {
			margin-bottom: 0;
		}
	}
`;

const TestimonialsBlock = (colour) => {
	
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
						}
						featuredImage {
							node {
								localFile {
									childImageSharp {
										gatsbyImageData(
											width: 100
											placeholder: BLURRED
											formats: [AUTO, WEBP, AVIF]

										)
									}
								}
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

			<h2 className="center">Happy Customers</h2>
			<TextTop>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi at beatae, culpa cupiditate earum est exercitationem fugit natus odit officia, pariatur possimus sit suscipit temporibus veniam vitae voluptate voluptates!
				</p>
			</TextTop>
			<TestimonialInner>
				<button className="arrow arrow--prev">
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="43.75" viewBox="0 0 25 43.75">
						<path id="Path_276" data-name="Path 276" d="M111.25,47.125a3.125,3.125,0,0,1-2.209-5.334L125.586,25.25,109.041,8.71a3.125,3.125,0,0,1,4.419-4.419l18.75,18.75a3.124,3.124,0,0,1,0,4.419L113.46,46.21A3.1,3.1,0,0,1,111.25,47.125Z" transform="translate(-108.125 -3.375)" fill="#fff"/>
					</svg>
				</button>
				<Swiper
					modules={[EffectFade, Pagination, Navigation]}
					className="slider"
					pagination={{
						clickable: true,
						el: '.bullets',
						bulletClass: 'bullet',
						bulletActiveClass: 'bullet--active',
						renderBullet: (index, className) => {
							return `<span class=${className}></span>`
						},
					}}
					navigation={{
						nextEl: '.arrow--next',
						prevEl: '.arrow--prev',
					}}
					breakpoints={{
						320: {
							slidesPerView: 1,
						},
						710: {
							slidesPerView: 2,
						},
						990: {
							slidesPerView: 3,
						},
					}}
				>
					{getAllTestimonials.map(item => (
						<SwiperSlide className="slide" key={item.node.id}>
							<TestimonialBlock data={item}/>
						</SwiperSlide>
					))}
				</Swiper>
				<button className="arrow arrow--next">
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="43.75" viewBox="0 0 25 43.75">
						<path id="Path_276" data-name="Path 276" d="M111.25,47.125a3.125,3.125,0,0,1-2.209-5.334L125.586,25.25,109.041,8.71a3.125,3.125,0,0,1,4.419-4.419l18.75,18.75a3.124,3.124,0,0,1,0,4.419L113.46,46.21A3.1,3.1,0,0,1,111.25,47.125Z" transform="translate(-108.125 -3.375)" fill="#fff"/>
					</svg>
				</button>
			</TestimonialInner>
			<div className="bullets"/>
		</TestimonialWrapper>
	)
}

export default TestimonialsBlock;