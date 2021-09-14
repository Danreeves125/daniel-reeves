import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import blobshape from "blobshape"
import {colour} from "./layout";

const { path} = blobshape({size: 500, growth: 3, edges: 10, seed: null});

const SiteHeader = styled.header `
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const Logo = styled.div `
  width: 60rem;
  position: relative;
  transition: ease 0.5s;

  @media(max-width: 1230px) {
    width: 45rem;
  }

  @media(max-width: 1024px) {
    width: 35rem;
  }

  @media(max-width: 375px) {
    width: 30rem;
  }

  .logo-bg {
    width: 100%;
    height: auto;
    margin-top: -0.2rem;
    transition:  0.5s ease;
  }
  
  .name {
    width: 20rem;
    position: absolute;
    top: 4.6rem;
    left: 4.6rem;
    height: auto;
    transition: ease 0.5s;

    @media(max-width: 1280px) {
      left: 1.5rem;
    }

    @media(max-width: 1230px) {
        width: 17rem;
        top: 3rem;
    }

    @media(max-width: 1024px) {
      width: 14rem;
      top: 2rem;
    }

    @media(max-width: 375px) {
      width: 12rem;
    }

    path {
      fill: ${colour !== '#EDEDED' ? '#fff' : '#333'}
    }
    
    
  }
`;

const Navigation = styled.nav `
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    padding: 4.6rem 3rem 0 0;
    grid-gap: 4.6rem;
    flex: 1 0 0;
    transition: ease 0.5s;

    @media(max-width: 1280px) {
        padding-right: 1.5rem;
    }

    @media(max-width: 1230px) {
        padding-top: 3rem;
    }

    @media(max-width: 1200px) {
      grid-gap: 2.5rem;
    }

    @media(max-width: 850px) {
        padding-top: 2.5rem;
    }

    @media(max-width: 1024px) {
        padding-top: 2rem;
    }
    
    @media(max-width: 750px) {
        display: none;
    }
  
    a {
      font-family: var(--primary-font);
      font-size: 2.2rem;
      line-height: 1.8rem;
      color: var(--jet);
      text-transform: uppercase;
      font-weight: bold;
      text-decoration: none;
      transition: ease, 0.5s;
      position: relative;
      
      svg {
        position: absolute;
        width: 5rem;
        height: auto;
        top: -2.2rem;
        right: -1.5rem;
        z-index: -1;
      }
    }
`;

const Header = () => {
    
    const data = useStaticQuery(graphql`
        query MainNavigation {
            wpMenu(slug: {eq: "header"}) {
                id
                slug
                name
                menuItems {
                    nodes {
                        id
                        url
                        label
                    }
                }
            }
        }
    `);

    const items = data.wpMenu.menuItems.nodes;
    
    setTimeout(() => {
        var svg = document.getElementsByTagName("svg")[0];
        var bbox = svg.getBBox();
        svg.setAttribute("width", bbox.width + "px");
        svg.setAttribute("height", bbox.height + "px");
        svg.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
        svg.style.opacity = 1;
    }, 1)
    
    return (
        <SiteHeader>
            <Logo>
                <svg opacity="0" className="logo-bg" xmlns="http://www.w3.org/2000/svg" width="500" height="600" viewBox="0 0 500 600" preserveAspectRatio="none"><path d="M0 0h660v1.762c-69.366 3.792-120.766 11.717-159.206 21.392-82.933 20.886-106.054 49.9-119.672 63.368-22.735 22.492-40.84 152.891-129.913 168.424S128.53 238.188 79.82 231.912C34.667 226.095 4.21 260.719 0 265.809z" fill={colour}/>
                </svg>
                <Link to="/" title="Daniel Reeves">
                    <svg className="name" xmlns="http://www.w3.org/2000/svg" width="207.393" height="114.29" viewBox="0 0 207.393 114.29">
                    <g transform="translate(-837.631 -218.899)"><g transform="translate(837.631 218.899)"><path d="M837.893,271.176a.865.865,0,0,1-.263-.638V219.8a.9.9,0,0,1,.9-.9h12.835q6.454,0,10.32,3.9t3.865,10.433V257.1q0,6.53-3.865,10.433t-10.32,3.9H838.531A.864.864,0,0,1,837.893,271.176Zm8.819-7.243,4.5-.075a4.842,4.842,0,0,0,4.016-1.989,8.765,8.765,0,0,0,1.614-5.292V233.76a8.557,8.557,0,0,0-1.539-5.366,4.992,4.992,0,0,0-4.166-1.989h-4.428a.332.332,0,0,0-.376.375v36.778A.331.331,0,0,0,846.713,263.933Z" transform="translate(-837.631 -218.899)" fill="#333"/><path d="M962.317,270.613l-1.426-7.881q0-.375-.45-.376H949.483q-.45,0-.45.376l-1.426,7.881a.847.847,0,0,1-.976.826H939.8q-1.052,0-.826-.976l11.108-50.738a.9.9,0,0,1,.976-.826h7.956a.9.9,0,0,1,.976.826L971.1,270.463v.3q0,.676-.826.676h-6.98A.846.846,0,0,1,962.317,270.613Zm-11.559-15.086h8.331c.3,0,.425-.124.375-.375l-4.353-23.718q-.076-.225-.226-.225t-.225.225l-4.278,23.718C950.333,255.4,950.459,255.527,950.759,255.527Z" transform="translate(-908.052 -218.899)" fill="#333"/><path d="M1082.76,219.162a.868.868,0,0,1,.638-.263h6.831a.9.9,0,0,1,.9.9v50.738a.9.9,0,0,1-.9.9h-7.881a.942.942,0,0,1-.976-.751l-11.183-31.824c-.05-.15-.138-.213-.263-.188a.231.231,0,0,0-.187.263l.075,31.6a.9.9,0,0,1-.9.9h-6.831a.9.9,0,0,1-.9-.9V219.8a.9.9,0,0,1,.9-.9h7.731a.944.944,0,0,1,.976.751l11.258,31.6c.049.15.137.213.263.187a.231.231,0,0,0,.187-.262V219.8A.868.868,0,0,1,1082.76,219.162Z" transform="translate(-993.031 -218.899)" fill="#333"/><path d="M1186.266,271.176a.865.865,0,0,1-.262-.638V219.8a.9.9,0,0,1,.9-.9h6.905a.9.9,0,0,1,.9.9v50.738a.9.9,0,0,1-.9.9H1186.9A.864.864,0,0,1,1186.266,271.176Z" transform="translate(-1079.801 -218.899)" fill="#333"/><path d="M1267.085,226.142a.867.867,0,0,1-.638.263h-16.212a.332.332,0,0,0-.375.375v14.185a.331.331,0,0,0,.375.376h9.607a.9.9,0,0,1,.9.9v5.779a.9.9,0,0,1-.9.9h-9.607a.332.332,0,0,0-.375.375v14.261a.331.331,0,0,0,.375.375h16.212a.9.9,0,0,1,.9.9v5.7a.9.9,0,0,1-.9.9h-24.393a.9.9,0,0,1-.9-.9V219.8a.9.9,0,0,1,.9-.9h24.393a.9.9,0,0,1,.9.9v5.7A.867.867,0,0,1,1267.085,226.142Z" transform="translate(-1118.137 -218.899)" fill="#333"/><path d="M1348.513,271.176a.865.865,0,0,1-.262-.638V219.8a.9.9,0,0,1,.9-.9h6.905a.9.9,0,0,1,.9.9v43.758a.331.331,0,0,0,.376.375h16.212a.9.9,0,0,1,.9.9v5.7a.9.9,0,0,1-.9.9h-24.393A.865.865,0,0,1,1348.513,271.176Z" transform="translate(-1192.586 -218.899)" fill="#333"/><path d="M857.446,471.276l-6.38-21.541c-.1-.2-.225-.3-.375-.3h-3.978a.332.332,0,0,0-.376.375v21.316a.9.9,0,0,1-.9.9h-6.905a.9.9,0,0,1-.9-.9V420.388a.9.9,0,0,1,.9-.9h14.111a12.519,12.519,0,0,1,11.746,7.318,18.134,18.134,0,0,1,1.689,7.994,16.839,16.839,0,0,1-1.8,8.031,12.08,12.08,0,0,1-5.029,5.1q-.3.075-.226.45l7.356,22.592a.842.842,0,0,1,.075.375q0,.676-.826.676h-7.206A.941.941,0,0,1,857.446,471.276Zm-11.109-43.908V442.3a.331.331,0,0,0,.376.375h4.578a5.368,5.368,0,0,0,4.391-2.1,8.851,8.851,0,0,0,1.689-5.7,9.011,9.011,0,0,0-1.689-5.742,5.334,5.334,0,0,0-4.391-2.139h-4.578A.332.332,0,0,0,846.337,427.368Z" transform="translate(-837.631 -358.337)" fill="#333"/><path d="M977.063,426.73a.867.867,0,0,1-.638.262H960.213a.332.332,0,0,0-.376.376v14.186a.331.331,0,0,0,.376.376h9.607a.9.9,0,0,1,.9.9v5.779a.9.9,0,0,1-.9.9h-9.607a.332.332,0,0,0-.376.375v14.261a.331.331,0,0,0,.376.375h16.212a.9.9,0,0,1,.9.9v5.7a.9.9,0,0,1-.9.9H952.032a.9.9,0,0,1-.9-.9V420.388a.9.9,0,0,1,.9-.9h24.393a.9.9,0,0,1,.9.9v5.7A.868.868,0,0,1,977.063,426.73Z" transform="translate(-916.53 -358.337)" fill="#333"/><path d="M1084.16,426.73a.868.868,0,0,1-.638.262H1067.31a.332.332,0,0,0-.375.376v14.186a.331.331,0,0,0,.375.376h9.607a.9.9,0,0,1,.9.9v5.779a.9.9,0,0,1-.9.9h-9.607a.332.332,0,0,0-.375.375v14.261a.331.331,0,0,0,.375.375h16.212a.9.9,0,0,1,.9.9v5.7a.9.9,0,0,1-.9.9h-24.394a.9.9,0,0,1-.9-.9V420.388a.9.9,0,0,1,.9-.9h24.394a.9.9,0,0,1,.9.9v5.7A.868.868,0,0,1,1084.16,426.73Z" transform="translate(-990.978 -358.337)" fill="#333"/><path d="M1169.486,471.2l-10.733-50.738-.075-.3q0-.675.826-.676h7.581a.847.847,0,0,1,.976.826l6.229,36.1q.074.225.226.225t.225-.225l6.079-36.1a.847.847,0,0,1,.976-.826h7.356q.974,0,.751.976L1179.093,471.2a.9.9,0,0,1-.976.826h-7.655A.9.9,0,0,1,1169.486,471.2Z" transform="translate(-1060.805 -358.337)" fill="#333"/><path d="M1307.218,426.73a.867.867,0,0,1-.638.262h-16.212a.332.332,0,0,0-.376.376v14.186c0,.251.376.376.376.376h9.607a.9.9,0,0,1,.9.9v5.779a.9.9,0,0,1-.9.9h-9.607a.332.332,0,0,0-.376.375v14.261a.331.331,0,0,0,.376.375h16.212a.9.9,0,0,1,.9.9v5.7a.9.9,0,0,1-.9.9h-24.393a.9.9,0,0,1-.9-.9V420.388a.9.9,0,0,1,.9-.9h24.393a.9.9,0,0,1,.9.9v5.7A.867.867,0,0,1,1307.218,426.73Z" transform="translate(-1146.036 -358.337)" fill="#333"/><path d="M1386.945,467.505a13.154,13.154,0,0,1-3.827-9.832v-1.951a.9.9,0,0,1,.9-.9h6.83a.9.9,0,0,1,.9.9v1.5a7.267,7.267,0,0,0,1.464,4.729,4.658,4.658,0,0,0,3.79,1.8,4.9,4.9,0,0,0,3.828-1.689,6.474,6.474,0,0,0,1.5-4.466,6.63,6.63,0,0,0-.826-3.377,10.537,10.537,0,0,0-2.327-2.7q-1.5-1.275-4.8-3.678a66.826,66.826,0,0,1-6.042-4.8,18.1,18.1,0,0,1-3.828-5.067,14.7,14.7,0,0,1-1.539-6.867q0-6.229,3.753-9.907a15.1,15.1,0,0,1,19.965.188,13.927,13.927,0,0,1,3.828,10.245v1.8a.9.9,0,0,1-.9.9h-6.755a.9.9,0,0,1-.9-.9v-1.951a7.113,7.113,0,0,0-1.463-4.691,4.778,4.778,0,0,0-3.865-1.764,4.682,4.682,0,0,0-3.677,1.614,6.511,6.511,0,0,0-1.426,4.466,6.981,6.981,0,0,0,1.539,4.578,35.935,35.935,0,0,0,6.042,5.179,87.464,87.464,0,0,1,6.905,5.517,16.281,16.281,0,0,1,3.6,4.691,13.461,13.461,0,0,1,1.276,6.08,13.922,13.922,0,0,1-3.828,10.245A13.523,13.523,0,0,1,1397,471.258,13.745,13.745,0,0,1,1386.945,467.505Z" transform="translate(-1216.719 -356.968)" fill="#333"/></g><circle cx="4.412" cy="4.412" r="4.412" transform="translate(1036.2 324.365)" fill="#2871da"/></g>
                </svg>
                </Link>
            </Logo>
            <Navigation>
                {items.map(item => (
                    <Link key={item.id} to={item.url.replace('http://', '/')} title={item.label}>
                        {item.label}
                        {
                            <svg style={{opacity: 0}} xmlns="http://www.w3.org/2000/svg" viewBox={ `0 0 500 500`}  preserveAspectRatio="xMinYMin meet">
                                <path d={path} fill={colour}></path>
                            </svg>
                        }
                    </Link>
                ))}
            </Navigation>
        </SiteHeader>
    )
}

export default Header