import React, { useEffect, useMemo, useState } from 'react'
import styles from './order.module.css'
import { menuTabs, popularMenu } from '../../Data'
import { useSearchParams } from 'react-router-dom'
import { IMenuItem } from '../../Interfaces'


const Order = () => {
  useEffect(() => {
    document.title = 'Delizoso | Order online'
  })

  const [searchParams, setSearchParams] = useSearchParams()
  const menuItem: string = searchParams.get('menuItem') || 'lunch'

  const handleMenuItem = (item: string): void => {
    setSearchParams({ menuItem: item.toLowerCase() })
    setActiveMenuPage(1)
  }

  useEffect(() => {
    setActiveMenuPage(1)
  }, [menuItem])

  const showMenuItem: number = 6
  const [activeMenuPage, setActiveMenuPage] = useState<number>(1)

  const startMenuItem: number = activeMenuPage * showMenuItem - showMenuItem
  const endMenuItem: number = activeMenuPage * showMenuItem

  const showMenu: IMenuItem[] | null = popularMenu[menuItem as keyof typeof popularMenu] || null

  const panigation: null | number = useMemo(() => {
    const totalLength: null | number = showMenu && Math.ceil(showMenu.length / showMenuItem)
    return totalLength
  }, [showMenu])

  return (
    <div className={styles.order}>
      <div className="container">
        <h2 className={styles.title}>Menu</h2>
        <div className={styles.menuTabs}>
          {
            menuTabs.map((e, i) => {
              return <p onClick={() => handleMenuItem(e)} className={`${menuItem == e.toLowerCase() ? styles.activeItem : ''} ${styles.menuItem}`} key={i}>{e}</p>
            })
          }
        </div>
        <div className={styles.menu}>
          {
            showMenu ?
              showMenu.slice(startMenuItem, endMenuItem).map(({ name, image, desc, price }, i) => {
                return <div className={styles.menuCard} key={i}>
                  <img className={styles.cardImage} src={image} />
                  <p className={styles.cardName}>{name}</p>
                  <p className={styles.cardDesc}>{desc}</p>
                  <div className={styles.cardFoot}>
                    <p className={styles.cardPrice}>${price}</p>
                    <button className={styles.cardOrder}>Order now</button>
                  </div>
                </div>
              }) :
              <div></div>
          }
        </div>

        <div className={styles.panigation}>
          {
            panigation ?
              <div className={styles.insidePanigation}>
                <button onClick={() => setActiveMenuPage(pre => pre - 1)} disabled={1 == activeMenuPage} className={styles.navBtn}>«</button>
                {
                  Array.from({ length: panigation }).map((_, i) => {
                    return <p onClick={() => setActiveMenuPage(i + 1)} className={`${activeMenuPage == (i + 1) ? styles.activeMenuPage : ''} ${styles.panigationNum}`} key={i}>{i + 1}</p>
                  })
                }
                <button onClick={() => setActiveMenuPage(pre => pre + 1)} disabled={panigation == activeMenuPage} className={styles.navBtn}>»</button>
              </div> :
              <div></div>
          }
        </div>
      </div>
    </div>
  )
}

export default Order