---
title: المساهمون في المشروع
layout: contributors
permalink: /used-by.html
---

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<br>
<div class="container text-right" id="contributors">
  <h3>قائمة المشاريع المستخدم بها</h3>
  <br>
  <div class="row">
    {% for item in site.data.used-by %}
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card">
        <img src="{{ item.logo }}" class="card-img-top">
        <div class="card-body">
          <a href="{{ item.url }}">
            <h5 class="card-title">{{ item.login }}</h5>
            <p class="card-text">
              <span>{{ item.name }}</span>
            </p>
          </a>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->