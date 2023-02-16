import Link from 'next/link';
import { logout } from '../pages/index';
import styles from '../styles/page.module.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <div>
          <Link href="http://localhost:3000/login">ログイン</Link>
        </div>
        <div>
          <Link href="http://localhost:3000/">ペット一覧へ</Link>
        </div>
        <div>
          <Link href="http://localhost:3000/create">登録ページ</Link>
        </div>
        {/* <div>
            <p>{userCookie}がログイン中。</p>
          </div> */}
        <Link href="http://localhost:3000/login">
          <button onClick={logout}>ログアウト</button>
        </Link>
      </nav>
      {children}
    </>
  );
}
