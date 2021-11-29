import React from "react";

import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  main: {
    border: '8px groove',
  },  
  parent: {
        display: 'flex',
      },
  
    image: {
      width: "30%",
      borderRight: '8px groove',
      },
  
    titleSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: '1',
      backgroundColor: 'black',
      color: 'white',
    },

    artist: {
      },

      title: {
      },

    rate: {
      fontStyle: 'italic',
      fontWeight: 'bold',
      },

      rateParent: {
        height: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '8px groove',
      },
    });

const Card = () => {
    return (
<div className={css(styles.main)}>
    <div className={css(styles.parent)}>
<img className={css(styles.image)} alt="album's Name" src="https://upload.wikimedia.org/wikipedia/commons/b/be/Acdc_backinblack_cover.jpg"></img>
<div className={css(styles.titleSection)}>
<h1 className={css(styles.artist)}> Metallica </h1>
<div className={css(styles.title)}> Black album (1991)</div>
</div>
</div>
<div className={css(styles.rateParent)}>
<div className={css(styles.rate)}>Rate this album ♥♥♥♥♥ </div>
</div>
</div>
    )
}

export default Card;