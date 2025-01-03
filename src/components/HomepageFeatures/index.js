import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '加行的三个阶段和正行',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        加行的具体修法可以分三个阶段：第一个阶段是外加行的修法；第二个阶段是内加行的修法；第三个阶段是破瓦法。
        <p>在外加行、内加行、破瓦法都修完后，就要修正行。正行的修法有很多种，不同教派有各自不同的正行修法。例如：宁玛巴要修大圆满，萨迦巴有道果的修法，格鲁巴有喜金刚的修法，也有时轮金刚的修法等等。</p>
        
      </>
    ),
  },
  {
    title: '为什么要修四加行',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        为什么不能直接从内加行开始修呢？前面也讲过，要培养正知正见，即正确的人生观和世界观，也就是在得到一种智慧之后，再用这种智慧的眼光去看人生，看世界。一个人的生命怎样才有价值，一个人怎样活才最有意义，轮回、宇宙、解脱到底是怎么一回事，所有这些疑问只有在佛教里才有正确的答案。我们必须要懂得这些，若缺少这些基础知识，修行就没有动力，修行若缺乏动力，就不会成功；反之，有了正知正见，修行就有了动力，在解脱、修法方面做任何事，就会非常主动，这样才会有很大的收获，所以一定要培养正知正见。怎样培养呢？就是要了解轮回的本来面目，只有这样，才会有正知正见，才可以培养出离心。
      </>
    ),
  },
  {
    title: '修加行也可以得解脱',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        如果只修加行不修正行，有没有可能得解脱呢？这是有可能的！因为前面四个内加行修好后，就要修上师瑜伽——莲花生大师的修法，而修好此法，命终之时就一定会往生到莲师刹土，在其刹土中便可以继续修行。在莲师刹土和在娑婆世界修行是不一样的。因为那儿是净土，修行者烦恼很少，具足种种顺缘，修行的速度非常快，成就也很快。由此可知，只修五加行而不修正行也能够解脱；但除非是极利根的人，一般人绝不可能只修正行不修加行就可以解脱。所以，凡是想修行的人，必须要修加行，而且要从外加行开始。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
