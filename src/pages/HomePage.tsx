import React from 'react';
import {
  Heart, Activity, Users,
  TrendingUp, Award,
  Target,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Network, Camera, Film, Edit3, Lightbulb, ChevronRight, Building2, Trophy, Sparkles, GPT, N8N } from '../components/Icons';
import DigitalAvatarPlayer from '../components/DigitalAvatarPlayer';

const HomePage: React.FC = () => {
  return (
    <div className="py-12 space-y-16 max-w-5xl mx-auto">
      {/* 课程标题区 */}
      <section className="text-center relative">
        <div className="liquid-card p-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg">
              <Heart className="w-12 h-12 text-gray-800" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
            健康状态分类与界定标准
          </h1>
          <p className="text-xl text-gray-900 mb-8 leading-relaxed">
            深入学习健康管理核心理论，掌握科学的健康评估方法
          </p>
        </div>
      </section>

      {/* 新增大标题：为什么要学习这节课 */}
      <motion.section
          className="mb-16 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            为什么要学习这节课
          </motion.h1>
          <motion.p
            className="text-lg text-gray-900 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            从更贴合市场的行业、企业、岗位角度为你一一分析
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          {/* 数字人播放器1 - 为什么要学习这节课 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYqXCNXgmu3.mov"
            position={{ top: 0, right: '-13rem' }}
          />
        </motion.section>

        {/* 第一部分：为什么要关注行业 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl mr-6">
              <TrendingUp className="w-8 h-8 text-gray-800" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">为什么要关注大健康行业？</h2>
              <p className="text-emerald-700 mt-2">健康管理是"黄金通行证"，跨界就业潜力巨大，未来职场必修技能！</p>
            </div>
          </motion.div>

          {/* 主内容区 - 大卡片 */}
          <motion.div
            className="liquid-card p-12 relative overflow-hidden mb-8"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注大健康行业-主图.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 装饰性背景元素 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* 原因与现状 - 全宽展示 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="text-emerald-800">行业现状与机遇</span>
                </h3>

                {/* 四个核心数据点 */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {/* 千亿级市场规模 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-emerald-300/50 backdrop-blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注大健康行业-蓝海崛起.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(16, 185, 129, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrendingUp className="w-8 h-8 text-emerald-700 mb-3" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">产业爆发</h4>
                    <p className="text-gray-800 text-sm">
                      大健康产业已突破8万亿元，覆盖医疗健康、营养保健、康养旅游、运动健身等多个子行业。预计2030年规模有望达到16万亿元，成为仅次于房地产和金融的第三大支柱产业。无论是功能性食品、医疗检测，还是养老社区和康复中心，都在快速扩张，<span className="font-bold text-emerald-800">岗位需求量随之成倍增长</span>
                    </p>
                  </motion.div>

                  {/* 技术迭代 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-emerald-300/50 backdrop-blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注大健康行业-政策驱动.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Building2 className="w-8 h-8 text-emerald-700 mb-3" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">政策加持</h4>
                    <p className="text-gray-800 text-sm">
                      <span className="font-bold text-emerald-700">《健康中国2030》</span>战略持续深化，明确提出"人人享有健康服务"。健康管理师被纳入国家职业目录，成为受政策重点鼓励的紧缺职业。多地政府推出专项人才补贴、职业培训补贴与落户政策，为从业者提供切实保障。这意味着进入这一行业的人，不仅有稳定岗位，还有<span className="font-bold text-emerald-700">实实在在的政策红利</span>
                    </p>
                  </motion.div>

                  {/* 需求广泛 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-emerald-300/50 backdrop-blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注大健康行业-薪资亮眼.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Film className="w-8 h-8 text-emerald-700 mb-3" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">人口趋势</h4>
                    <p className="text-gray-800 text-sm">
                      中国老龄化速度全球领先，预计到2035年，60岁及以上人口将突破4亿，占比超过30%。老龄化伴随慢病高发、康养需求爆发，使得<span className="font-bold text-emerald-700">健康管理成为刚需</span>。与此同时，年轻群体对健康消费的重视度也空前提升
                    </p>
                  </motion.div>

                  {/* 职业机遇 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-emerald-300/50 backdrop-blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注大健康行业-低门槛创业.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Network className="w-8 h-8 text-emerald-700 mb-3" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">消费升级</h4>
                    <p className="text-gray-800 text-sm">
                      虽然整体经济环境面临消费降级压力，但健康消费逆势上涨。功能性食品、营养补剂、减脂塑形、心理咨询、运动干预等成为热点赛道。尤其是在短视频、自媒体的推动下，健康知识与健康产品具备强传播力，带动了<span className="text-emerald-700 font-bold">大量就业岗位的产生</span>
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* 结果导向 - 分为两列 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="text-teal-800">发展机遇</span>
                </h3>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* 对企业而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-8 border border-emerald-300/50 backdrop-blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注大健康行业-2. 结果导向- 对企业来说.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Target className="w-10 h-10 text-emerald-700 mr-3" />
                      <h4 className="text-2xl font-bold text-emerald-700">对企业来说</h4>
                    </div>
                    <p className="text-gray-900 text-lg leading-relaxed">
                      健康管理是实现精准客户服务、延长用户生命周期、推动品牌升级的战略性核心。企业通过<span className="font-bold text-emerald-700">健康服务锁定用户需求</span>，从而获得持续增长动力。
                    </p>
                  </motion.div>

                  {/* 对学生而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-8 border border-emerald-300/50 backdrop-blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注大健康行业-2. 结果导向-对学生来说.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Users className="w-10 h-10 text-emerald-700 mr-3" />
                      <h4 className="text-2xl font-bold text-emerald-700">对学生来说</h4>
                    </div>
                    <p className="text-gray-900 text-lg leading-relaxed">
                      这是一个进入门槛较低、成长路径清晰、就业渠道广泛的黄金赛道。掌握核心技能就能快速转化为<span className="font-bold text-emerald-700">职业竞争力</span>，享受政策补贴和岗位红利。
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 数字人播放器2 - 为什么要关注大健康行业 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYIUE01GqpU.mov"
            position={{ top: 380, right: '-13rem' }}
          />
        </motion.section>

        {/* 第二部分：为什么要分清企业类型 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20 relative"
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl mr-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">为什么要分清企业类型？</h2>
              <p className="text-teal-800 mt-2">明确行业分工，才能精准定位未来发展方向</p>
            </div>
          </motion.div>

          {/* 主内容区 - 阶梯式企业类型布局 */}
          <div className="relative max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* 上游企业 */}
              <motion.div
                className="relative max-w-3xl mr-auto ml-0"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Building2 className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-emerald-300/50 backdrop-blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-上游.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-emerald-700">上游企业</h3>
                        <span className="text-emerald-700/60 text-sm font-semibold">基础资源</span>
                      </div>
                      <p className="text-gray-900 text-base mb-6">主要聚焦于健康原料和科技创新，是整个产业链的源头。包括功能性营养素研发企业、保健食品原料供应商、医疗检测设备制造商、体外诊断试剂企业。这些公司决定了行业的产品基础和创新水平</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-800 text-sm">健康食品研发企业</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-800 text-sm">健康设备公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-800 text-sm">健康服务技术研发企业</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <ChevronRight className="w-10 h-10 text-emerald-700/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 中游企业 */}
              <motion.div
                className="relative max-w-3xl mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: -5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Camera className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-emerald-300/50 backdrop-blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-中游.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-emerald-700">中游企业</h3>
                        <span className="text-emerald-700/60 text-sm font-semibold">创意核心</span>
                      </div>
                      <p className="text-gray-900 text-base mb-6">作为连接科研与消费者的核心环节，中游企业提供个性化健康管理服务。涵盖健康管理公司、保险健康部、养老康复机构、母婴健康中心。这里直接产出服务，岗位数量庞大</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-800 text-sm">健康管理中心</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-800 text-sm">营养咨询公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-800 text-sm">数字健康科技平台</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-800 text-sm">体检医疗服务平台</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  >
                    <ChevronRight className="w-10 h-10 text-emerald-700/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 下游企业 */}
              <motion.div
                className="relative max-w-3xl ml-auto mr-0"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Users className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-emerald-300/50 backdrop-blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-下游.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: -10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-emerald-700">下游企业</h3>
                        <span className="text-emerald-700/60 text-sm font-semibold">市场触达</span>
                      </div>
                      <p className="text-gray-900 text-base mb-6">直接与消费者接触，是最贴近市场的一环。健身俱乐部、健康IP运营公司、营养咨询工作室、新媒体健康博主都属于这一层。这里岗位灵活多样，既有全职就业，也有自媒体创业</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-800 text-sm">保险公司健康部</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-800 text-sm">高端养老社区</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-800 text-sm">母婴护理中心</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-800 text-sm">健身机构</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-2xl border border-emerald-300/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-emerald-700 text-lg font-semibold text-center">
              明确行业分工，才能精准定位未来发展方向
            </p>
          </motion.div>

          {/* 数字人播放器3 - 为什么要分清企业类型 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYIUE01juX2.mov"
            position={{ top: 200, right: '-13rem' }}
          />
        </motion.section>

        {/* 第三部分：关于岗位你该知道的是 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl mr-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">关于岗位你该知道的是</h2>
              <p className="text-teal-800 mt-2">有哪些岗位？普遍要求与待遇如何？</p>
            </div>
          </motion.div>

          {/* 岗位分类卡片 */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* 前期策划 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-emerald-300/50 backdrop-blur-sm"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-（一）有哪些岗位？-1. 客户对接.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-700 ml-3">健康评估</h3>
                </div>
                <p className="text-gray-800 text-sm mb-4">这一岗位的核心任务是对客户进行全面的健康档案建立和动态追踪，结合体检数据、生活习惯与心理状态进行多维度风险识别。需要掌握专业的评估工具和问卷系统，能根据数据为客户设计出科学、个性化的干预路径。健康评估人员不仅是干预方案的起点，也是客户信任的第一环</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-700" />
                    <span className="text-gray-900 text-sm">健康顾问</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 中期拍摄 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-emerald-300/50 backdrop-blur-sm"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-（一）有哪些岗位？-2. 健康评估.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-700 ml-3">健康干预</h3>
                </div>
                <p className="text-gray-800 text-sm mb-4">健康干预岗位是健康管理服务的“执行环节”，直接落实饮食、运动、睡眠、心理和生活方式等干预措施。他们不仅要会制定具体计划，还要陪伴并监督客户执行，确保干预效果达到既定目标。</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-700" />
                    <span className="text-gray-900 text-sm">营养师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-700" />
                    <span className="text-gray-900 text-sm">健康管理师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-700" />
                    <span className="text-gray-900 text-sm">老年健康照护师</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 后期制作 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-emerald-300/50 backdrop-blur-sm"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-（一）有哪些岗位？-3. 健康干预.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <Edit3 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-700 ml-3">市场拓展</h3>
                </div>
                <p className="text-gray-800 text-sm mb-4">市场拓展类岗位的核心是把健康管理服务推广出去，形成企业和个人的影响力。工作包括内容传播（图文、短视频）、社群与私域转化、品牌活动策划，以及与企业客户的B2B合作洽谈。岗位要求既懂健康行业知识，又具备数字营销与渠道运营能力，是健康管理行业中“扩大影响、带动增长”的重要角色。</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-700" />
                    <span className="text-gray-900 text-sm">品牌运营专员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-700" />
                    <span className="text-gray-900 text-sm">新媒体运营专员</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 普遍要求与待遇 */}
          <motion.div
            className="glass-cinema p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-emerald-700 mb-6 text-center">行业要求与待遇</h3>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-100/80 to-teal-100/80 border border-emerald-300/50 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-emerald-700 mb-2">学历要求</div>
                  <p className="text-gray-800 text-sm">大专以上学历，医学、营养学、体育学、心理学背景优先</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-100/80 to-teal-100/80 border border-emerald-300/50 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-emerald-700 mb-2">技能要求</div>
                  <p className="text-gray-800 text-sm">掌握健康评估工具、干预方案制定、数字化平台应用能力</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-100/80 to-teal-100/80 border border-emerald-300/50 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-emerald-700 mb-2">职业前景</div>
                  <p className="text-gray-800 text-sm">入行起薪8-12k，随着经验和证书积累，快速上升到15-20k</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-100/80 to-teal-100/80 border border-emerald-300/50 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-emerald-700 mb-2">8K-12K</div>
                  <p className="text-gray-800 text-sm">入行起薪，随经验快速上升</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 数字人播放器4 - 关于岗位你该知道的是 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYIUE013FSf.mov"
            position={{ top: 200, right: '-13rem' }}
          />
        </motion.section>

        {/* 第四部分：通过学习，你能学到什么 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl mr-6">
              <Sparkles className="w-8 h-8 text-gray-800" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">通过学习，你能学到什么？</h2>
              <p className="text-teal-800 mt-2">系统化的健康管理专业知识与实战技能</p>
            </div>
          </motion.div>

          {/* 主内容区 - 课程大纲和技能 */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* 课程核心内容卡片 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-cyan-50 p-8 border border-emerald-300/50 backdrop-blur-sm"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/四、通过学习，你能学到什么？-（一）单元课程目录.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-emerald-500 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-emerald-700">核心课程内容</h3>
                </div>

                <div className="space-y-4">
                  {/* 客户对接 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-emerald-700 font-semibold text-base">客户对接</span>
                    <div className="text-gray-800 text-sm mt-2 space-y-1">
                      <p>• 三问搞清客户需求：一句话抓痛点（1节）</p>
                      <p>• 体检报告会说话：三步讲明白（1节）</p>
                      <p>• 复盘到复购：回访就能再签单（1节）</p>
                    </div>
                  </div>

                  {/* 健康评估 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-emerald-700 font-semibold text-base">健康评估</span>
                    <div className="text-gray-800 text-sm mt-2 space-y-1">
                      <p>• 五维建档：一张表就够用（1节）</p>
                      <p>• 数据一键收：健康数据采集操作指南（2节）</p>
                      <p>• 指标读懂人：血糖血压怎么看（1节）</p>
                      <p>• 目标能落地：SMART写成清单（1节）</p>
                    </div>
                  </div>

                  {/* 健康干预 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-emerald-700 font-semibold text-base">健康干预</span>
                    <div className="text-gray-800 text-sm mt-2 space-y-1">
                      <p>• 营养干预方案设计：吃对配比，GI/GL控住"波动与饥饿感"（1节）</p>
                      <p>• 运动处方制定要点：照着 FITT 练，心率分区让进步"看得见"（1节）</p>
                      <p>• 睡眠与压力管理：重建睡眠结构，减轻入睡压力（1节）</p>
                      <p>• 慢病管理专题：体重、高血压、糖代谢管理方案（1节）</p>
                    </div>
                  </div>

                  {/* 市场拓展 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-emerald-700 font-semibold text-base">市场拓展</span>
                    <div className="text-gray-800 text-sm mt-2 space-y-1">
                      <p>• 私域从0到1：社群5天起量（1节）</p>
                      <p>• 爆款健康内容：15秒开头抓住人（1节）</p>
                      <p>• 企服小方案：团检到随访一条龙（1节）</p>
                      <p>• 保险同频合作：权益打包更好卖（1节）</p>
                      <p>• 合规不踩线：会说人话也安全（1节）</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 实战技能卡片 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 to-emerald-50 p-8 border border-teal-300/50"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/四、通过学习，你能学到什么？-（二）本节课课程内容.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-emerald-500 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-emerald-700">本单元课程重点</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text--emerald-700" />
                      <span className="text-emerald-700 font-semibold text-base">健康管理行业的机遇与前景</span>
                    </div>
                    <p className="text-gray-800 text-sm">深入了解当前大健康行业的市场规模、政策支持、人才需求等核心信息</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-emerald-700" />
                      <span className="text-emerald-700 font-semibold text-base">健康评估与个性化方案逻辑</span>
                    </div>
                    <p className="text-gray-800 text-sm">理解健康评估的核心要素，掌握个性化方案制定的科学方法</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-5 h-5 text-emerald-700" />
                      <span className="text-emerald-700 font-semibold text-base">营养干预与创业机会</span>
                    </div>
                    <p className="text-gray-800 text-sm">从实战角度学习营养干预技巧，探索健康管理创业路径</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Sparkles className="w-5 h-5 text-emerald-700" />
                      <span className="text-emerald-700 font-semibold text-base">真实功能食品开发与高端客户案例</span>
                    </div>
                    <p className="text-gray-800 text-sm">学习真实案例，了解功能性食品开发与高端客户服务实战经验</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-emerald-700" />
                      <span className="text-emerald-700 font-semibold text-base">智能化工具在健康管理中的应用</span>
                    </div>
                    <p className="text-gray-800 text-sm">掌握AI工具在健康管理中的实际应用，提升服务效率和专业性</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 案例分析和工具应用 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 涉及到的大型案例 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-400/10 to-teal-500/10 p-8 border border-emerald-300/50 backdrop-blur-sm"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/四、通过学习，你能学到什么？-（三）涉及到的大型案例.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-emerald-500 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-emerald-700">涉及到的大型案例</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-emerald-700" />
                      <span className="text-emerald-700 font-semibold text-base">新街口社区：家庭医生签约式健康管理项目</span>
                    </div>
                    <p className="text-gray-800 text-sm">社区健康管理服务的实践案例，探索家庭医生签约制的落地模式</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-emerald-700" />
                      <span className="text-emerald-700 font-semibold text-base">初存科技：健康小屋全周期主动健康管理项目</span>
                    </div>
                    <p className="text-gray-800 text-sm">智能化健康小屋的运营模式与全周期健康管理服务体系</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-emerald-700" />
                      <span className="text-emerald-700 font-semibold text-base">石楼镇社区：中医调理+营养干预+社群督导三位一体健康管理项目</span>
                    </div>
                    <p className="text-gray-800 text-sm">中西医结合的综合健康管理服务模式，打造社区健康管理闭环</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-emerald-700" />
                      <span className="text-emerald-700 font-semibold text-base">赤壁市疾控中心:鹿管家平台慢性病团体健康管理项目</span>
                    </div>
                    <p className="text-gray-800 text-sm">数字化平台在慢性病管理中的应用，实现团体健康管理的标准化流程</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 涉及到 AI 工具教学 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-400/10 to-teal-500/10 p-8 border border-emerald-300/50 backdrop-blur-sm"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/四、通过学习，你能学到什么？-（四）涉及到 AI 工具教学.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-emerald-500 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-emerald-700">涉及到 AI 工具教学</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Camera className="w-5 h-5 text-emerald-700" />
                      <span className="text-emerald-700 font-semibold text-base">Calorify</span>
                    </div>
                    <p className="text-gray-900 text-sm mt-1">通过手机拍照即可识别食物种类与重量，自动生成卡路里和营养素报告，支持多餐记录与饮食趋势分析。适合营养师、健康管理师和普通用户快速建立饮食档案，提升饮食干预的执行效率与准确性</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <GPT className="w-5 h-5 text-emerald-700" />
                      <span className="text-emerald-700 font-semibold text-base">ChatGPT</span>
                    </div>
                    <p className="text-gray-900 text-sm mt-1">基于大语言模型，能够将复杂的健康数据转化为通俗易懂的咨询内容，辅助健康顾问解读体检结果、营养报告和慢病风险。还能生成个性化的健康管理方案、客户沟通话术和科普内容，提升服务的专业性与可扩展性</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-emerald-700" />
                      <span className="text-emerald-700 font-semibold text-base">GluMate</span>
                    </div>
                    <p className="text-gray-900 text-sm mt-1">专注于糖尿病、高血压等慢病患者的智能化管理，提供血糖/血压实时监测、用药提醒、饮食运动干预建议，并能与医生端平台联动，实现全周期跟踪与个性化调整。广泛应用于医疗机构、健康管理中心与家庭场景</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <N8N className="w-5 h-5 text-emerald-700" />
                      <span className="text-emerald-700 font-semibold text-base">N8N</span>
                    </div>
                    <p className="text-gray-900 text-sm mt-1">低代码自动化工具，能够将健康数据采集、方案制定、干预跟踪和效果反馈实现全流程自动化。可与可穿戴设备、在线表单和CRM系统打通，帮助机构和健康管理师减少重复工作，提高数据管理效率与客户体验</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 数字人播放器5 - 通过学习，你能学到什么 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYIUE01mZiN.mov"
            position={{ top: 300, right: '-13rem' }}
          />
        </motion.section>

        {/* 第五部分：岗位晋升路径 */}
        <motion.section className="mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.div
            className="bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-3xl p-8 border border-emerald-200/40"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Trophy className="w-10 h-10 text-emerald-700" />
              <h2 className="text-3xl font-bold text-gray-800">岗位晋升路径</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-gradient-to-br from-emerald-100/80 to-cyan-100/80 rounded-2xl p-6 border border-emerald-200/40 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-emerald-700 mb-2">初级职位</div>
                <div className="text-3xl font-bold text-gray-800 mb-4">8K-12K</div>
                <div className="text-teal-800 text-sm">
                  <div>健康顾问助理</div>
                  <div>营养咨询师</div>
                  <div>健康数据管理员</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-teal-400/10 to-cyan-500/10 rounded-2xl p-6 border border-teal-200/40 text-center"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-teal-800 mb-2">中级职位</div>
                <div className="text-3xl font-bold text-gray-800 mb-4">12K-20K</div>
                <div className="text-teal-900 text-sm">
                  <div>健康管理师</div>
                  <div>高级营养师</div>
                  <div>健康项目主管</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 rounded-2xl p-6 border border-emerald-200/40 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-emerald-700 mb-2">高级职位</div>
                <div className="text-3xl font-bold text-gray-800 mb-4">20K+</div>
                <div className="text-teal-800 text-sm">
                  <div>健康管理总监</div>
                  <div>首席营养师</div>
                  <div>健康业务负责人</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

      {/* 行动号召 */}
      <section className="text-center">
        <div className="liquid-card p-12 max-w-3xl mx-auto">
          <Award className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            开启您的健康管理学习之旅
          </h2>
          <p className="text-lg text-gray-900 mb-8 leading-relaxed">
            系统学习健康管理知识，成为专业的健康管理人才
          </p>
          
          <div className="flex justify-center">
            <Link to="/course/health-status">
              <button className="health-btn">
                开始学习
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;